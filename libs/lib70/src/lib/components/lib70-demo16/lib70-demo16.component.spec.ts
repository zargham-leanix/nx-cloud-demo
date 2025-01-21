import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib70Demo16Component } from './lib70-demo16.component';

describe('Lib70Demo16Component', () => {
  let component: Lib70Demo16Component;
  let fixture: ComponentFixture<Lib70Demo16Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib70Demo16Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib70Demo16Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
