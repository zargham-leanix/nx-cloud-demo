import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib3Demo16Component } from './lib3-demo16.component';

describe('Lib3Demo16Component', () => {
  let component: Lib3Demo16Component;
  let fixture: ComponentFixture<Lib3Demo16Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib3Demo16Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib3Demo16Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
