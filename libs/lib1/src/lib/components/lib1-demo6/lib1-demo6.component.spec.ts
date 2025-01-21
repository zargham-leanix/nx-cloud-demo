import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib1Demo6Component } from './lib1-demo6.component';

describe('Lib1Demo6Component', () => {
  let component: Lib1Demo6Component;
  let fixture: ComponentFixture<Lib1Demo6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib1Demo6Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib1Demo6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
