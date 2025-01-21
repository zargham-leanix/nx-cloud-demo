import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib79Demo6Component } from './lib79-demo6.component';

describe('Lib79Demo6Component', () => {
  let component: Lib79Demo6Component;
  let fixture: ComponentFixture<Lib79Demo6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib79Demo6Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib79Demo6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
