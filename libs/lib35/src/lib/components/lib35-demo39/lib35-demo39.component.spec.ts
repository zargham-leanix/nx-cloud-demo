import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib35Demo39Component } from './lib35-demo39.component';

describe('Lib35Demo39Component', () => {
  let component: Lib35Demo39Component;
  let fixture: ComponentFixture<Lib35Demo39Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib35Demo39Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib35Demo39Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
