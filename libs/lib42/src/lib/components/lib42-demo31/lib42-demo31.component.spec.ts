import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib42Demo31Component } from './lib42-demo31.component';

describe('Lib42Demo31Component', () => {
  let component: Lib42Demo31Component;
  let fixture: ComponentFixture<Lib42Demo31Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib42Demo31Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib42Demo31Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
