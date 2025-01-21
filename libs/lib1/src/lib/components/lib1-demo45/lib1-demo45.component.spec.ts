import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib1Demo45Component } from './lib1-demo45.component';

describe('Lib1Demo45Component', () => {
  let component: Lib1Demo45Component;
  let fixture: ComponentFixture<Lib1Demo45Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib1Demo45Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib1Demo45Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
