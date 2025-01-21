import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib1Demo11Component } from './lib1-demo11.component';

describe('Lib1Demo11Component', () => {
  let component: Lib1Demo11Component;
  let fixture: ComponentFixture<Lib1Demo11Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib1Demo11Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib1Demo11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
