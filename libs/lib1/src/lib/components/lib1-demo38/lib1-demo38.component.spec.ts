import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib1Demo38Component } from './lib1-demo38.component';

describe('Lib1Demo38Component', () => {
  let component: Lib1Demo38Component;
  let fixture: ComponentFixture<Lib1Demo38Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib1Demo38Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib1Demo38Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
