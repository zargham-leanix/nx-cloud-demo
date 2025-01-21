import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib69Demo29Component } from './lib69-demo29.component';

describe('Lib69Demo29Component', () => {
  let component: Lib69Demo29Component;
  let fixture: ComponentFixture<Lib69Demo29Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib69Demo29Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib69Demo29Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
