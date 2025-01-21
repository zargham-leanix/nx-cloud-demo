import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib1Demo0Component } from './lib1-demo0.component';

describe('Lib1Demo0Component', () => {
  let component: Lib1Demo0Component;
  let fixture: ComponentFixture<Lib1Demo0Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib1Demo0Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib1Demo0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
