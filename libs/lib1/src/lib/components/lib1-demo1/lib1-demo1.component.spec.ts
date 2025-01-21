import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib1Demo1Component } from './lib1-demo1.component';

describe('Lib1Demo1Component', () => {
  let component: Lib1Demo1Component;
  let fixture: ComponentFixture<Lib1Demo1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib1Demo1Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib1Demo1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
