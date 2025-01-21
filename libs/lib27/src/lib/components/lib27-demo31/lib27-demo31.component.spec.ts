import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib27Demo31Component } from './lib27-demo31.component';

describe('Lib27Demo31Component', () => {
  let component: Lib27Demo31Component;
  let fixture: ComponentFixture<Lib27Demo31Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib27Demo31Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib27Demo31Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
