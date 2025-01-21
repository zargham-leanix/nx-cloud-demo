import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib2Demo40Component } from './lib2-demo40.component';

describe('Lib2Demo40Component', () => {
  let component: Lib2Demo40Component;
  let fixture: ComponentFixture<Lib2Demo40Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib2Demo40Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib2Demo40Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
