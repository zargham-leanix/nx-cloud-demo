import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib1Demo27Component } from './lib1-demo27.component';

describe('Lib1Demo27Component', () => {
  let component: Lib1Demo27Component;
  let fixture: ComponentFixture<Lib1Demo27Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib1Demo27Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib1Demo27Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
