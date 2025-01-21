import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib19Demo16Component } from './lib19-demo16.component';

describe('Lib19Demo16Component', () => {
  let component: Lib19Demo16Component;
  let fixture: ComponentFixture<Lib19Demo16Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib19Demo16Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib19Demo16Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
