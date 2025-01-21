import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib1Demo15Component } from './lib1-demo15.component';

describe('Lib1Demo15Component', () => {
  let component: Lib1Demo15Component;
  let fixture: ComponentFixture<Lib1Demo15Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib1Demo15Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib1Demo15Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
