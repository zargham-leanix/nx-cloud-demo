import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib1Demo32Component } from './lib1-demo32.component';

describe('Lib1Demo32Component', () => {
  let component: Lib1Demo32Component;
  let fixture: ComponentFixture<Lib1Demo32Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib1Demo32Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib1Demo32Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
