import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib1Demo16Component } from './lib1-demo16.component';

describe('Lib1Demo16Component', () => {
  let component: Lib1Demo16Component;
  let fixture: ComponentFixture<Lib1Demo16Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib1Demo16Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib1Demo16Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
