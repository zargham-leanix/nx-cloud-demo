import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib1Demo9Component } from './lib1-demo9.component';

describe('Lib1Demo9Component', () => {
  let component: Lib1Demo9Component;
  let fixture: ComponentFixture<Lib1Demo9Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib1Demo9Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib1Demo9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
