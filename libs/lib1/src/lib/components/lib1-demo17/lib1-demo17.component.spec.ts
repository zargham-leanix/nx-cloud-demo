import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib1Demo17Component } from './lib1-demo17.component';

describe('Lib1Demo17Component', () => {
  let component: Lib1Demo17Component;
  let fixture: ComponentFixture<Lib1Demo17Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib1Demo17Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib1Demo17Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
