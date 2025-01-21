import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib1Demo47Component } from './lib1-demo47.component';

describe('Lib1Demo47Component', () => {
  let component: Lib1Demo47Component;
  let fixture: ComponentFixture<Lib1Demo47Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib1Demo47Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib1Demo47Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
