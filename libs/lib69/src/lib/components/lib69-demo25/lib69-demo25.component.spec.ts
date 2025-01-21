import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib69Demo25Component } from './lib69-demo25.component';

describe('Lib69Demo25Component', () => {
  let component: Lib69Demo25Component;
  let fixture: ComponentFixture<Lib69Demo25Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib69Demo25Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib69Demo25Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
