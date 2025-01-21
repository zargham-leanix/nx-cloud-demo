import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib69Demo12Component } from './lib69-demo12.component';

describe('Lib69Demo12Component', () => {
  let component: Lib69Demo12Component;
  let fixture: ComponentFixture<Lib69Demo12Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib69Demo12Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib69Demo12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
