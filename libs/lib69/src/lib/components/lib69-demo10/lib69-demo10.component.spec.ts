import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib69Demo10Component } from './lib69-demo10.component';

describe('Lib69Demo10Component', () => {
  let component: Lib69Demo10Component;
  let fixture: ComponentFixture<Lib69Demo10Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib69Demo10Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib69Demo10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
