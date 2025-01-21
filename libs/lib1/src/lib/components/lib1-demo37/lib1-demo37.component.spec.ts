import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib1Demo37Component } from './lib1-demo37.component';

describe('Lib1Demo37Component', () => {
  let component: Lib1Demo37Component;
  let fixture: ComponentFixture<Lib1Demo37Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib1Demo37Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib1Demo37Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
