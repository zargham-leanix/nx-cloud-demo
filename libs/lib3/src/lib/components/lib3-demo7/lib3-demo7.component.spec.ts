import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib3Demo7Component } from './lib3-demo7.component';

describe('Lib3Demo7Component', () => {
  let component: Lib3Demo7Component;
  let fixture: ComponentFixture<Lib3Demo7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib3Demo7Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib3Demo7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
