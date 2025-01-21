import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib69Demo27Component } from './lib69-demo27.component';

describe('Lib69Demo27Component', () => {
  let component: Lib69Demo27Component;
  let fixture: ComponentFixture<Lib69Demo27Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib69Demo27Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib69Demo27Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
