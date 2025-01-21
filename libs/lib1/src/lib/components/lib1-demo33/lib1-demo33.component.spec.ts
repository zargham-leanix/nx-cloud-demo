import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib1Demo33Component } from './lib1-demo33.component';

describe('Lib1Demo33Component', () => {
  let component: Lib1Demo33Component;
  let fixture: ComponentFixture<Lib1Demo33Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib1Demo33Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib1Demo33Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
