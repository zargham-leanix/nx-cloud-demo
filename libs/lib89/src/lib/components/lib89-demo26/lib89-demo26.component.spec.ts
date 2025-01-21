import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib89Demo26Component } from './lib89-demo26.component';

describe('Lib89Demo26Component', () => {
  let component: Lib89Demo26Component;
  let fixture: ComponentFixture<Lib89Demo26Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib89Demo26Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib89Demo26Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
