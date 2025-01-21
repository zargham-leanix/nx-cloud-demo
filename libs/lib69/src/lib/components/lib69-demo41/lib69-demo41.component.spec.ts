import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib69Demo41Component } from './lib69-demo41.component';

describe('Lib69Demo41Component', () => {
  let component: Lib69Demo41Component;
  let fixture: ComponentFixture<Lib69Demo41Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib69Demo41Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib69Demo41Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
