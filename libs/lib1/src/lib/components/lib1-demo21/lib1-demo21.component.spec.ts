import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib1Demo21Component } from './lib1-demo21.component';

describe('Lib1Demo21Component', () => {
  let component: Lib1Demo21Component;
  let fixture: ComponentFixture<Lib1Demo21Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib1Demo21Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib1Demo21Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
