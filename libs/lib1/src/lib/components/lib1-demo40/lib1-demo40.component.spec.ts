import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib1Demo40Component } from './lib1-demo40.component';

describe('Lib1Demo40Component', () => {
  let component: Lib1Demo40Component;
  let fixture: ComponentFixture<Lib1Demo40Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib1Demo40Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib1Demo40Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
