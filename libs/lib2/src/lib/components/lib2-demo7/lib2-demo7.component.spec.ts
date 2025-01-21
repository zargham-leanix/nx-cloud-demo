import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib2Demo7Component } from './lib2-demo7.component';

describe('Lib2Demo7Component', () => {
  let component: Lib2Demo7Component;
  let fixture: ComponentFixture<Lib2Demo7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib2Demo7Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib2Demo7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
