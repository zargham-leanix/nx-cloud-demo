import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib2Demo16Component } from './lib2-demo16.component';

describe('Lib2Demo16Component', () => {
  let component: Lib2Demo16Component;
  let fixture: ComponentFixture<Lib2Demo16Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib2Demo16Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib2Demo16Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
