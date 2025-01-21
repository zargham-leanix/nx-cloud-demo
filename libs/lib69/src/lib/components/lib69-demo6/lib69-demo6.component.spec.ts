import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib69Demo6Component } from './lib69-demo6.component';

describe('Lib69Demo6Component', () => {
  let component: Lib69Demo6Component;
  let fixture: ComponentFixture<Lib69Demo6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib69Demo6Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib69Demo6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
