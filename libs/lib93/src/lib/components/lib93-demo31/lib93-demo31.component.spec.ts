import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib93Demo31Component } from './lib93-demo31.component';

describe('Lib93Demo31Component', () => {
  let component: Lib93Demo31Component;
  let fixture: ComponentFixture<Lib93Demo31Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib93Demo31Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib93Demo31Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
