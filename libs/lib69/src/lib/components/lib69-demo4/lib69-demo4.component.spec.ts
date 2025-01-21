import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib69Demo4Component } from './lib69-demo4.component';

describe('Lib69Demo4Component', () => {
  let component: Lib69Demo4Component;
  let fixture: ComponentFixture<Lib69Demo4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib69Demo4Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib69Demo4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
