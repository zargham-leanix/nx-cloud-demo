import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib70Demo39Component } from './lib70-demo39.component';

describe('Lib70Demo39Component', () => {
  let component: Lib70Demo39Component;
  let fixture: ComponentFixture<Lib70Demo39Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib70Demo39Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib70Demo39Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
