import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib35Demo26Component } from './lib35-demo26.component';

describe('Lib35Demo26Component', () => {
  let component: Lib35Demo26Component;
  let fixture: ComponentFixture<Lib35Demo26Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib35Demo26Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib35Demo26Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
