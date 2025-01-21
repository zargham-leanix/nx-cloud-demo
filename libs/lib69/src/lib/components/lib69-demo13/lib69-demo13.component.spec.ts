import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib69Demo13Component } from './lib69-demo13.component';

describe('Lib69Demo13Component', () => {
  let component: Lib69Demo13Component;
  let fixture: ComponentFixture<Lib69Demo13Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib69Demo13Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib69Demo13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
