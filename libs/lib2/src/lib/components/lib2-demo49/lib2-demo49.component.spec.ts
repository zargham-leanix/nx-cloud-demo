import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib2Demo49Component } from './lib2-demo49.component';

describe('Lib2Demo49Component', () => {
  let component: Lib2Demo49Component;
  let fixture: ComponentFixture<Lib2Demo49Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib2Demo49Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib2Demo49Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
