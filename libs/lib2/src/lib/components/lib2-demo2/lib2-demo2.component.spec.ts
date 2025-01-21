import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib2Demo2Component } from './lib2-demo2.component';

describe('Lib2Demo2Component', () => {
  let component: Lib2Demo2Component;
  let fixture: ComponentFixture<Lib2Demo2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib2Demo2Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib2Demo2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
