import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib69Demo15Component } from './lib69-demo15.component';

describe('Lib69Demo15Component', () => {
  let component: Lib69Demo15Component;
  let fixture: ComponentFixture<Lib69Demo15Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib69Demo15Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib69Demo15Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
