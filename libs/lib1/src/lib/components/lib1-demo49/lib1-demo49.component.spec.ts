import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib1Demo49Component } from './lib1-demo49.component';

describe('Lib1Demo49Component', () => {
  let component: Lib1Demo49Component;
  let fixture: ComponentFixture<Lib1Demo49Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib1Demo49Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib1Demo49Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
