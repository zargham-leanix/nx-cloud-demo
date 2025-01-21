import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib1Demo18Component } from './lib1-demo18.component';

describe('Lib1Demo18Component', () => {
  let component: Lib1Demo18Component;
  let fixture: ComponentFixture<Lib1Demo18Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib1Demo18Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib1Demo18Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
