import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib2Demo11Component } from './lib2-demo11.component';

describe('Lib2Demo11Component', () => {
  let component: Lib2Demo11Component;
  let fixture: ComponentFixture<Lib2Demo11Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib2Demo11Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib2Demo11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
