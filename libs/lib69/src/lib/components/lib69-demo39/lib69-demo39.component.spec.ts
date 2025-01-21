import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib69Demo39Component } from './lib69-demo39.component';

describe('Lib69Demo39Component', () => {
  let component: Lib69Demo39Component;
  let fixture: ComponentFixture<Lib69Demo39Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib69Demo39Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib69Demo39Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
