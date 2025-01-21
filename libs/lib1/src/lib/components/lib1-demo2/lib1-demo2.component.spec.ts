import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib1Demo2Component } from './lib1-demo2.component';

describe('Lib1Demo2Component', () => {
  let component: Lib1Demo2Component;
  let fixture: ComponentFixture<Lib1Demo2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib1Demo2Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib1Demo2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
