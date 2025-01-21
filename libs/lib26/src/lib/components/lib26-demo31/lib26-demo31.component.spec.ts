import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib26Demo31Component } from './lib26-demo31.component';

describe('Lib26Demo31Component', () => {
  let component: Lib26Demo31Component;
  let fixture: ComponentFixture<Lib26Demo31Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib26Demo31Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib26Demo31Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
