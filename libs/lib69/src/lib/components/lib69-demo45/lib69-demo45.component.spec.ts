import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib69Demo45Component } from './lib69-demo45.component';

describe('Lib69Demo45Component', () => {
  let component: Lib69Demo45Component;
  let fixture: ComponentFixture<Lib69Demo45Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib69Demo45Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib69Demo45Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
