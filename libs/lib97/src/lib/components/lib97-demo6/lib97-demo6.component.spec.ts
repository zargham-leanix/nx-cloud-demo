import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib97Demo6Component } from './lib97-demo6.component';

describe('Lib97Demo6Component', () => {
  let component: Lib97Demo6Component;
  let fixture: ComponentFixture<Lib97Demo6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib97Demo6Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib97Demo6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
