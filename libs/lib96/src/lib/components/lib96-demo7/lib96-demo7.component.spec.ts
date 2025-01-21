import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib96Demo7Component } from './lib96-demo7.component';

describe('Lib96Demo7Component', () => {
  let component: Lib96Demo7Component;
  let fixture: ComponentFixture<Lib96Demo7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib96Demo7Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib96Demo7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
